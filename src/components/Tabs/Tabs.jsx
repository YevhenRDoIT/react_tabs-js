export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleTabClick = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
