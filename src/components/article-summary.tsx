"use client";

import { useState } from 'react';
import { summarizeHealthContent } from '@/ai/flows/summarize-health-content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export function ArticleSummary({ articleContent }: { articleContent: string }) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setIsLoading(true);
    setError('');
    setSummary('');
    try {
      const result = await summarizeHealthContent({ articleContent });
      setSummary(result.summary);
    } catch (err) {
      setError('Gagal membuat ringkasan. Silakan coba lagi.');
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-12">
        <Card className="bg-secondary/50 border-dashed">
            <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <Sparkles className="text-primary" />
                            Ringkasan AI
                        </CardTitle>
                        <CardDescription>Tidak punya banyak waktu? Biarkan AI merangkum artikel ini untuk Anda.</CardDescription>
                    </div>
                    <Button onClick={handleSummarize} disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                        Buat Ringkasan
                    </Button>
                </div>
            </CardHeader>
            {isLoading && (
                <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </CardContent>
            )}
            {error && <CardContent><p className="text-destructive">{error}</p></CardContent>}
            {summary && (
                <CardContent>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                        <p>{summary}</p>
                    </div>
                </CardContent>
            )}
        </Card>
    </div>
  );
}
