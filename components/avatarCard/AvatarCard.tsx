interface AvatarCardProps {
  title: string;
  description: string;
  imageUrl: string;
  action: string;
}
export const AvatarCard = ({ title, description, action, imageUrl }: AvatarCardProps) => {
  return (
    <div>
      <div>image</div>
      <div>
        <span>title</span>
        <div>description</div>
      </div>
    </div>
  );
};
