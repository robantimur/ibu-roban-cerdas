import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/placeholder-data";
import { Search } from "lucide-react";

export default function ArticlesPage() {
  const categories = ["Semua", "Gizi", "Kesehatan Gigi", "Sanitasi"];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Pusat Pengetahuan</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Temukan artikel, tips, dan panduan terpercaya untuk mendukung kesehatan Anda dan keluarga.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative max-w-lg mx-auto">
          <Input placeholder="Cari artikel..." className="pr-10" />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="Semua" className="w-full">
        <TabsList className="mb-8 h-auto flex-wrap">
        {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
        ))}
        </TabsList>

        <TabsContent value="Semua">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </TabsContent>
        {categories.slice(1).map(category => (
             <TabsContent key={category} value={category}>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.filter(a => a.category === category).map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                 </div>
             </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link href={`/articles/${article.slug}`}>
        <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
            <Image
            src={article.imageUrl}
            alt={article.title}
            data-ai-hint={article.imageHint}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            />
        </CardHeader>
        <CardContent className="p-6 flex-1">
            <Badge variant="secondary" className="mb-2">{article.category}</Badge>
            <CardTitle className="mb-2 text-lg">{article.title}</CardTitle>
            <CardDescription>{article.excerpt}</CardDescription>
        </CardContent>
        </Card>
    </Link>
  );
}
