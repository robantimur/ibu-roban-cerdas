import Image from "next/image";
import { articles } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ArticleSummary } from "@/components/article-summary";

// Helper component to render text with **bold** syntax
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;
  // Use a regex to split by **...** and keep the delimiters for mapping
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </>
  );
};


export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleContent = article.content;

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <article>
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{article.title}</h1>
        </header>
        
        <Image
          src={article.imageUrl}
          alt={article.title}
          data-ai-hint={article.imageHint}
          width={800}
          height={400}
          className="w-full rounded-lg mb-8 aspect-video object-cover"
        />

        <div className="prose dark:prose-invert max-w-none mx-auto text-lg leading-relaxed">
          {articleContent.split('\n\n').map((block, index) => {
              const lines = block.split('\n');

              // Check for list with a title, e.g., "Title:\n- Item 1\n- Item 2"
              const listTitleMatch = block.match(/^(.*?):\n((?:.|\n)*)/);
              if (listTitleMatch) {
                const title = listTitleMatch[1];
                const listContent = listTitleMatch[2];
                const listLines = listContent.split('\n').filter(l => l.trim() !== '');
                const isList = listLines.length > 0 && listLines.every(line => line.trim().startsWith('-') || /^\d+\.\s/.test(line.trim()));
                
                if (isList) {
                  const isUl = listLines[0].trim().startsWith('-');
                  return (
                    <div key={index} className="space-y-2 my-4">
                      <p className="mb-2"><FormattedText text={title} />:</p>
                      {isUl ? (
                        <ul className="space-y-1">
                          {listLines.map((item, i) => <li key={i}><FormattedText text={item.trim().substring(2)} /></li>)}
                        </ul>
                      ) : (
                        <ol className="space-y-1">
                          {listLines.map((item, i) => <li key={i}><FormattedText text={item.replace(/^\d+\.\s/, '')} /></li>)}
                        </ol>
                      )}
                    </div>
                  );
                }
              }

              // Standalone lists
              const isUnorderedList = lines.every(line => line.trim().startsWith('-'));
              if (isUnorderedList) {
                return (
                  <ul key={index} className="space-y-1 my-4">
                    {lines.map((item, i) => (
                      <li key={i}><FormattedText text={item.trim().substring(2)} /></li>
                    ))}
                  </ul>
                );
              }

              // Heading check (simple heuristic for the data)
              if (lines.length === 1 && block.length < 80 && !block.endsWith('.')) {
                return (
                  <h4 key={index} className="font-semibold text-2xl mt-8 mb-4">
                    <FormattedText text={block} />
                  </h4>
                );
              }

              // Default to paragraph
              return (
                <p key={index} className="my-4">
                  <FormattedText text={block} />
                </p>
              );
          })}
        </div>
      </article>

      <ArticleSummary articleContent={articleContent} />

    </div>
  );
}
