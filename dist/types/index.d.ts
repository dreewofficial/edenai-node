export declare class EdenAINode {
    private apiKey;
    private apiUrl;
    constructor(apiKey: string);
    /**
     * Get message response by prompt
     * @param message string
     * @param provider string - `openai` | `google`
     * @description https://www.edenai.co/ - to get the API key
     * @returns Promise<string> - response by ai
     */
    getChatResponse(prompt: string, provider: "google" | "openai"): Promise<string>;
}
