import { generateStyleToken } from '@/shared/utils';
import { useState } from 'react';
import './Tabs.css';
import { TabItem, TabsProps } from './Tabs.type';

export function Tabs({
  items,
  defaultActiveIndex = 0,
  size = 'medium',
  color = 'brand-primary',
  foregroundColor = 'brand-primary-foreground',
  onTabChange,
  ...props
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  const renderTab = (item: TabItem, index: number) => {
    const isActive = activeIndex === index;
    return (
      <button
        key={item.label}
        className={['tab-item'].join(' ')}
        style={{
          color: generateStyleToken('color', isActive ? foregroundColor : color),
          backgroundColor: isActive ? generateStyleToken('color', color) : undefined,
        }}
        onClick={() => handleTabClick(index)}
      >
        {item.label}
      </button>
    );
  };

  return (
    <div {...props} className={['tabs-container', size].join(' ')}>
      <div className="tabs-header">{items.map((item, index) => renderTab(item, index))}</div>
      <div className="tabs-content"></div>
    </div>
  );
}
