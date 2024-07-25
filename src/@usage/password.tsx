import { useState } from "react";
import { PasswordInput } from "@/@registry/components/password";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PasswordUsage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="current_password">Current Password</Label>
        <PasswordInput
          id="current_password"
          value={currentPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentPassword(e.target.value)
          }
          autoComplete="current-password"
        />
      </div>
      <div>
        <Label htmlFor="password">New Password</Label>
        <PasswordInput
          id="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          autoComplete="new-password"
        />
      </div>
      <div>
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <PasswordInput
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordConfirmation(e.target.value)
          }
          autoComplete="new-password"
        />
      </div>
      <Button type="submit">Save</Button>
    </div>
  );
};

export default PasswordUsage;
