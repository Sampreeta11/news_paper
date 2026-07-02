"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

export default function UploadIssuePage() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload New Issue</CardTitle>
          <CardDescription>
            Create a new Daily Issue by uploading a PDF and setting its metadata.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Issue Title</Label>
            <Input id="title" placeholder="e.g. The Daily Post - Vol 42, No. 1" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Publish Date</Label>
            <Input id="date" type="date" />
          </div>

          <div className="space-y-2">
            <Label>PDF File</Label>
            <div className="border-2 border-dashed rounded-lg p-12 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/20 transition-colors cursor-pointer">
              <UploadCloud className="w-10 h-10 mb-4 text-primary" />
              <p className="text-sm font-medium">Click to select or drag and drop</p>
              <p className="text-xs mt-1">PDF files only (max 32MB)</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline">Save as Draft</Button>
          <Button>Publish Issue</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
