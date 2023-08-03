import { useUser } from "@clerk/nextjs";
// import user1 from "@/public/empty.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  const usei=user?.profileImageUrl
  return (
    <Avatar className="h-8 w-8 bg-white">
      <AvatarImage src={usei} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};