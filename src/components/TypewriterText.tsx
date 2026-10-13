import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  roles,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = '',
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[currentRoleIndex];

    if (isPaused) return;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else {
        // Fully typed — pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        // Fully deleted — move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, isPaused, currentRoleIndex, roles, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span className={className} aria-label={roles[currentRoleIndex]}>
      <span>{displayText}</span>
      <span
        className="animate-blink ml-0.5 inline-block w-[2px] h-[1em] bg-current align-middle"
        aria-hidden="true"
      />
    </span>
  );
};

export default TypewriterText;
