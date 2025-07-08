// src/ai/flows/health-assistant.ts
'use server';

/**
 * @fileOverview An AI health assistant tailored for young mothers in Roban Timur.
 *
 * - aiHealthAssistantForMothers - A function that handles health-related questions.
 * - AIHealthAssistantInput - The input type for the aiHealthAssistantForMothers function.
 * - AIHealthAssistantOutput - The return type for the aiHealthAssistantForMothers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIHealthAssistantInputSchema = z.object({
  query: z.string().describe('The health-related question from the young mother.'),
});
export type AIHealthAssistantInput = z.infer<typeof AIHealthAssistantInputSchema>;

const AIHealthAssistantOutputSchema = z.object({
  response: z.string().describe('The AI assistant\'s response to the health-related question.'),
});
export type AIHealthAssistantOutput = z.infer<typeof AIHealthAssistantOutputSchema>;

export async function aiHealthAssistantForMothers(input: AIHealthAssistantInput): Promise<AIHealthAssistantOutput> {
  return aiHealthAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiHealthAssistantPrompt',
  input: {schema: AIHealthAssistantInputSchema},
  output: {schema: AIHealthAssistantOutputSchema},
  prompt: `You are a helpful AI health assistant tailored for young mothers in Roban Timur.

  You should provide quick and reliable information, and consider the local context of Roban Timur when answering questions.

  Question: {{{query}}}`,
});

const aiHealthAssistantFlow = ai.defineFlow(
  {
    name: 'aiHealthAssistantFlow',
    inputSchema: AIHealthAssistantInputSchema,
    outputSchema: AIHealthAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
