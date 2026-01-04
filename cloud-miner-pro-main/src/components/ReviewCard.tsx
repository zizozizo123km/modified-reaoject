import React from 'react';
import { Star, BadgeCheck, MoreHorizontal, Globe, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  text: string;
  stars: number;
  img: string;
  date?: string;
  verified?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, text, stars, img, date, verified }) => {

  const renderStars = () => (
    <div className="flex gap-0.5 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={12} 
          fill={i < stars ? "currentColor" : "none"} 
          className={i < stars ? "" : "text-gray-300 dark:text-gray-600"}
        />
      ))}
    </div>
  );

  const ActionButton = ({ Icon, label }: { Icon: React.ElementType, label: string }) => (
    <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 text-gray-600 dark:text-gray-300 w-full justify-center">
      <Icon size={18} />
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 w-full">
      
      {/* Header Section (Profile, Name, Date, Options) */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src={img} 
              alt={name} 
              className="w-10 h-10 rounded-full object-cover" 
            />
          </div>
          
          <div>
            <div className="flex items-center gap-1">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-[13px] hover:underline cursor-pointer">{name}</h4>
              {verified && (
                 <BadgeCheck size={14} className="text-blue-500 ml-0.5" title="Verified Account" />
              )}
            </div>
            
            <div className="flex items-center text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
              {renderStars()}
              <span className="mx-1"> · </span>
              {date && <span className="mr-1">{date}</span>}
              <span className="mx-1"> · </span>
              <Globe size={10} title="Public Review" />
            </div>
          </div>
        </div>
        
        <MoreHorizontal size={20} className="text-gray-500 cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" />
      </div>

      {/* Text Content */}
      <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
        "{text}"
      </p>

      {/* Stats Line Placeholder (Optional) */}
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 pb-2 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
            <span className="bg-blue-500 rounded-full w-3 h-3 flex items-center justify-center mr-1">
                <ThumbsUp size={8} className="text-white" />
            </span>
            {/* Hardcoded placeholder for Facebook aesthetic */}
            <span>You and 14 others</span>
        </div>
        <span>3 Comments · 1 Share</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around pt-2 -mx-2">
        <ActionButton Icon={ThumbsUp} label="Like" />
        <ActionButton Icon={MessageCircle} label="Comment" />
        <ActionButton Icon={Share2} label="Share" />
      </div>
    </div>
  );
};

export default ReviewCard;