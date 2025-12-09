import { Request, Response, NextFunction } from "express";

const forbiddenPatterns = [
    /ignore.*previous/i,
    /disregard.*instructions/i,
    /system override/i,
    /you are now/i,
    /you are no longer/i,
    /pretend.*system/i,
    /as system/i,
    /change your rules/i,
    /jailbreak/i,
    /bypass/i,
    /override/i,
    /act as assistant/i,
];

/* 
Checks Prompt Entered by User!
Sanitizes the Outupt and cleans the prompt to prevent prompt injection!
*/
export const promptSanitizer = (req: Request, res: Response, next: NextFunction) => {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ message: "Prompt is required" });
    }

    if (/\"role\"\s*:/i.test(prompt)) {
        return res.status(400).json({ message: "Role manipulation detected" });
    }

    for (const pattern of forbiddenPatterns) {
        if (pattern.test(prompt)) {
            return res.status(400).json({
                message: "Prompt violation: unsafe or manipulative instructions detected",
                blocked_pattern: pattern.toString()
            });
        }
    }

    const allowedDomains = [
        /letter/i,
        /poem/i,
        /story/i,
        /novel/i,
        /literature/i,
        /write/i,
    ];

    const isAllowed = allowedDomains.some(pattern => pattern.test(prompt));

    if (!isAllowed) {
        return res.status(400).json({
            message: "Prompt rejected: Only literature and letter-writing topics are allowed."
        });
    }

    next();
};
