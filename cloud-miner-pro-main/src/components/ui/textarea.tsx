import * as React from "react";

import { cn } from "@/lib/utils";

// تم تغيير الاسم ليعكس مكون منطقة إنشاء منشور في فيسبوك
export interface FacebookPostAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FacebookPostArea = React.forwardRef<HTMLTextAreaElement, FacebookPostAreaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        // تطبيق تصميم مشابه لمربع إنشاء منشور في فيسبوك (خلفية بيضاء/رمادية فاتحة، حدود ناعمة، تركيز أزرق)
        "flex min-h-[100px] w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-base text-gray-800 transition-colors placeholder:text-gray-500 shadow-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
FacebookPostArea.displayName = "FacebookPostArea";

export { FacebookPostArea };