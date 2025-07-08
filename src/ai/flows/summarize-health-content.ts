// Summarizes a long article on family health, so users can quickly understand the key points and save time.
'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeHealthContentInputSchema = z.object({
  articleContent: z.string().describe('The content of the health article to summarize.'),
});
export type SummarizeHealthContentInput = z.infer<typeof SummarizeHealthContentInputSchema>;

const SummarizeHealthContentOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the health article in Indonesian.'),
});
export type SummarizeHealthContentOutput = z.infer<typeof SummarizeHealthContentOutputSchema>;

export async function summarizeHealthContent(
  input: SummarizeHealthContentInput
): Promise<SummarizeHealthContentOutput> {
  return summarizeHealthContentFlow(input);
}

const summarizeHealthContentPrompt = ai.definePrompt({
  name: 'summarizeHealthContentPrompt',
  input: {schema: SummarizeHealthContentInputSchema},
  output: {schema: SummarizeHealthContentOutputSchema},
  prompt: `Ringkas artikel kesehatan berikut dalam Bahasa Indonesia. Fokus pada poin-poin utama dan rekomendasi praktisnya:\n\n{{{articleContent}}}`,
});

const summarizeHealthContentFlow = ai.defineFlow(
  {
    name: 'summarizeHealthContentFlow',
    inputSchema: SummarizeHealthContentInputSchema,
    outputSchema: SummarizeHealthContentOutputSchema,
  },
  async input => {
    const {output} = await summarizeHealthContentPrompt(input);
    return output!;
  }
);
