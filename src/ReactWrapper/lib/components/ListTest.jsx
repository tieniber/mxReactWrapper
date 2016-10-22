// List data as an array of strings
const list = [
  'Brian Vaughn',
  'Foo',
  'Bar',
  'Thing 4',
  'Thing 5'
  // And so on...
];

function rowRenderer ({ key, index, style}) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

// Render your list
ReactDOM.render(
  <List
    width={300}
    height={300}
    rowCount={list.length}
    rowHeight={20}
    rowRenderer={rowRenderer}
  />,
  document.getElementById('foobar')
);
