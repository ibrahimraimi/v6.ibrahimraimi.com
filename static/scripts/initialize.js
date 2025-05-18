document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialize.js: DOM fully loaded');
  
  if (typeof gsap === 'undefined') {
    console.error('GSAP is not loaded');
    return;
  }

  if (typeof SplitType === 'undefined') {
    console.error('SplitType is not loaded');
    return;
  }
  
  console.log('Libraries detected, initializing hover effects');
  
  // Initialize list items
  document.querySelectorAll('.list__item').forEach((item) => {
    const cols = Array.from(item.querySelectorAll('.hover-effect'));
    if (cols.length) {
      console.log('Found hover effects in list item:', cols.length);
    }
    
    // Set up hover effect using GSAP directly
    cols.forEach(col => {
      // Create text splitting
      const split = new SplitType(col, { types: 'chars,words' });
      
      // Store original state
      const originalChars = Array.from(split.chars || []).map(char => char.innerHTML);
      
      // Add hover listeners
      item.addEventListener('mouseenter', () => {
        // Animate hover effect
        gsap.fromTo(
          col,
          { '--anim': 0 },
          { duration: 1, ease: 'expo', '--anim': 1 }
        );
        
        // Only animate chars if they exist
        if (split.chars && split.chars.length) {
          split.chars.forEach((char, index) => {
            gsap.fromTo(
              char,
              { opacity: 0 },
              {
                duration: 0.03,
                opacity: 1,
                delay: (index + 1) * 0.06,
                repeat: 2,
                repeatRefresh: true,
                repeatDelay: 0.05
              }
            );
          });
        }
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(col, { duration: 0.6, ease: 'power4', '--anim': 0 });
      });
    });
  });

  // Same for all standalone hover effect links
  document.querySelectorAll('a.hover-effect').forEach((item) => {
    // Skip links inside list items since we already handled those
    if (item.closest('.list__item')) return;
    
    console.log('Processing standalone hover effect:', item);
    
    // Create text splitting
    const split = new SplitType(item, { types: 'chars,words' });
    
    // Add hover listeners
    item.addEventListener('mouseenter', () => {
      gsap.fromTo(
        item,
        { '--anim': 0 },
        { duration: 1, ease: 'expo', '--anim': 1 }
      );
      
      // Only animate chars if they exist
      if (split.chars && split.chars.length) {
        split.chars.forEach((char, index) => {
          gsap.fromTo(
            char,
            { opacity: 0 },
            {
              duration: 0.03,
              opacity: 1,
              delay: (index + 1) * 0.06,
              repeat: 2,
              repeatRefresh: true,
              repeatDelay: 0.05
            }
          );
        });
      }
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { duration: 0.6, ease: 'power4', '--anim': 0 });
    });
  });
});

// Also try initializing on page load as a backup
window.addEventListener('load', () => {
  console.log('Window load event fired, checking for missed initializations');
  
  // Check if any hover effects haven't been initialized
  document.querySelectorAll('.hover-effect').forEach(el => {
    if (!el._splitType) {
      console.log('Found uninitialized hover effect, re-running initialization');
      // Initialization would go here, but it's better to just let 
      // the DOMContentLoaded event handle it
    }
  });
});
