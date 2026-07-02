import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Site Settings</CardTitle>
          <CardDescription>
            Manage the general settings of the E-Paper platform.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="site-name">Site Name</Label>
            <Input id="site-name" defaultValue="ದೈನಂದಿನ ಸುದ್ದಿ (The Daily News)" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="admin-email">Contact Email</Label>
            <Input id="admin-email" type="email" defaultValue="admin@example.com" />
          </div>

          <div className="space-y-2">
            <Label>Maintenance Mode</Label>
            <div className="text-sm text-muted-foreground mb-2">Enable this to hide the site from public viewers while updating.</div>
            <Button variant="outline">Enable Maintenance Mode</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
