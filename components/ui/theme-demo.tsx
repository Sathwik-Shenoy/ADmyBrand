import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ThemeDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Theme Demo</CardTitle>
        <CardDescription>
          This card demonstrates the theme switching capabilities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            This text adapts to the current theme automatically.
          </p>
          <p className="text-sm font-medium">
            Background and foreground colors change seamlessly.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
