"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/logo";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";


export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    if (password.length < 6) {
        setError("Password minimal harus 6 karakter.");
        toast({
            title: "Gagal Mendaftar",
            description: "Password minimal harus 6 karakter.",
            variant: "destructive",
        });
        setIsLoading(false);
        return;
    }
    try {
      await signUp(name, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      let errorMessage = "Terjadi kesalahan. Silakan coba lagi.";
      if (err.code === "auth/email-already-in-use") {
        errorMessage = "Email ini sudah terdaftar. Silakan gunakan email lain.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage = "Format email yang Anda masukkan tidak valid.";
      }
      setError(errorMessage);
       toast({
        title: "Gagal Mendaftar",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] py-12">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl">Buat Akun Baru</CardTitle>
          <CardDescription>Masukkan data Anda untuk memulai.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="full-name">Nama Lengkap</Label>
                <Input 
                  id="full-name" 
                  placeholder="Nama Lengkap Anda" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="email@anda.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  placeholder="Minimal 6 karakter" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Buat Akun
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Sudah punya akun?{" "}
            <Link href="/login" className="underline">
              Masuk di sini
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
