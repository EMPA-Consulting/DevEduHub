const List = ({ items, onClick, className }) => (
    items.map(item => (
        <h2 className={className} key={item.name} onClick={() => onClick(item.name)} style={{ cursor: 'pointer' }}>
            {item.name}
        </h2>
    ))
);

export default List;