import { generateStyleToken } from '@/shared/utils';
import { useTranslation } from 'react-i18next';
import './Tabs.css';
import { TabItem, TabsProps } from './Tabs.type';

export function Tabs({
  items,
  activeIndex = 0,
  color = 'brand-primary',
  foregroundColor = 'brand-primary-foreground',
  onTabChange,
}: TabsProps) {
  const { t } = useTranslation();

  const handleTabClick = (index: number) => {
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
        {t(item.label)}
      </button>
    );
  };

  return (
    <div className={['tabs-container'].join(' ')}>
      <div className="tabs-header">{items.map((item, index) => renderTab(item, index))}</div>
    </div>
  );
}
