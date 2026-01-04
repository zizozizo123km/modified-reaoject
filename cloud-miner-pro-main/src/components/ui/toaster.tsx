import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* Structure mimicking a Facebook Notification item */}
            <div style={{ display: 'flex', alignItems: 'flex-start', padding: '10px' }}>
              
              {/* Simulated Profile Picture / Notification Icon (Facebook Blue #1877F2) */}
              <div 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#1877F2', 
                  marginRight: '12px',
                  flexShrink: 0 
                }}
              >
                {/* Placeholder for Profile Picture or Facebook Icon */}
              </div>

              {/* Content Area */}
              <div style={{ flexGrow: 1 }}>
                {/* Title serves as the main notification text (e.g., "User reacted to your post") */}
                {title && <ToastTitle style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{title}</ToastTitle>}
                
                {/* Description provides secondary context */}
                {description && <ToastDescription style={{ fontSize: '0.85rem', color: '#606770' }}>{description}</ToastDescription>}
                
                {/* Action serves as the timestamp or blue interactive text */}
                {(action || true) && (
                    <div style={{ fontSize: '0.7rem', color: '#1877F2', marginTop: '4px' }}>
                        {action || "Just now · See Post"}
                    </div>
                )}
              </div>

              {/* Context Menu / Close Button */}
              <ToastClose />
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}