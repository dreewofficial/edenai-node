import axios, { AxiosResponse } from "axios";

export class EdenAINode {
  private apiKey: string;
  private apiUrl: string = "https://api.edenai.run/v2";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Get message response by prompt
   * @param message string
   * @param provider string - `openai` | `google`
   * @description https://www.edenai.co/ - to get the API key
   * @returns Promise<string> - response by ai
   */
  public getChatResponse(
    prompt: string,
    provider: "google" | "openai"
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error("EdenAI API Key not set");
    }

    if (provider !== "google" && provider !== "openai") {
      throw new Error("Invalid provider");
    }

    return new Promise<string>((resolve, reject) => {
      axios(`${this.apiUrl}/text/chat`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: `Bearer ${this.apiKey}`,
        },
        data: {
          response_as_dict: true,
          attributes_as_list: false,
          show_original_response: false,
          temperature: 0,
          max_tokens: 1000,
          providers: provider,
          text: prompt,
        },
      })
        .then((response) => {
          const data = response.data;

          if (data.openai.status === "success") {
            resolve(data.openai.generated_text);
          } else {
            reject(new Error("Not found response for chat."));
          }
        })
        .catch((error) => {
          reject(new Error(error));
        });
    });
  }
}
