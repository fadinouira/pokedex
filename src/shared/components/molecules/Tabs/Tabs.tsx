import { generateStyleToken } from '@/shared/utils';
import { useState } from 'react';
import './Tabs.css';
import { TabsProps } from './Tabs.type';

export function Tabs({
  items,
  defaultActiveIndex = 0,
  size = 'medium',
  color = 'brand-primary-foreground',
  backgroundColor = 'brand-primary',
  onTabChange,
  ...props
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  return (
    <div {...props} className={['tabs-container', size].join(' ')}>
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={['tab-item', activeIndex === index ? 'active' : ''].join(' ')}
            style={{
              color: generateStyleToken('color', color),
              backgroundColor: generateStyleToken(
                'color',
                activeIndex === index ? backgroundColor : undefined,
              ),
            }}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{items[activeIndex]?.content}</div>
    </div>
  );
}
