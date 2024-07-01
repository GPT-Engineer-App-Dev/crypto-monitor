import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Settings() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>User Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Profile Information</label>
              <Input placeholder="Name" className="mt-1" />
              <Input placeholder="Email" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Change Password</label>
              <Input type="password" placeholder="Current Password" className="mt-1" />
              <Input type="password" placeholder="New Password" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Notification Preferences</label>
              <Input placeholder="Email Notifications" className="mt-1" />
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Settings;