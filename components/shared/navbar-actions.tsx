
"use client";
import { HelpCircle, Settings } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import UserBox from "./user-box";
import { Avatar, AvatarFallback } from "../ui/avatar";
const NavbarActions = ({ userId }: { userId: string | null }) => {
  return (
    <div className="flex items-center space-x-2">
      <ModeToggle />
      <div
        className="p-2 hover:bg-secondary rounded-full transition"
        role="button"
      >
        <HelpCircle className="w-5 h-5" />
      </div>
      <div
        className="p-2 hover:bg-secondary rounded-full transition"
        role="button"
      >
        <Settings className="w-5 h-5" />
      </div>
      {userId ? (
        <UserBox />
      ) : (
        <Avatar className="cursor-pointer">
          <AvatarFallback>JX</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default NavbarActions;
