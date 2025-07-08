import Image from "next/image";
import { articles } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArticleSummary } from "@/components/article-summary";

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const fullArticleContent = article.content + "\n\n" + article.content.replace("pertama", "kedua").replace("Awal", "Selanjutnya");

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <article>
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={article.authorImageUrl} alt={article.author} data-ai-hint="doctor person" />
                <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{article.author}</span>
            </div>
            <span>&middot;</span>
            <time dateTime={article.date}>{article.date}</time>
          </div>
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
          <p>{fullArticleContent}</p>
        </div>
      </article>

      <ArticleSummary articleContent={fullArticleContent} />

    </div>
  );
}
