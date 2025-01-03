import { useCustomization } from '../../contexts/Customization';

const Configurator = () => {
  const {
    chairColors,
    chairColor,
    setChairColor,
    cushionColors,
    cushionColor,
    setCushionColor,
    threadColors,
    threadColor,
    setThreadColor,
    textField,
    setTextField
  } = useCustomization();
  const handleTextChange = (event) => {
    setTextField(event.target.value);
  };
  const exportFile = () => {
    console.log(
      'tên khách hàng: ' + textField,
      'màu chủ đạo: ' + threadColor.name,
      'màu gối: ' + cushionColor.name,
      'màu ghế: ' + chairColor.name
    );
  };
  return (
    <div className="top-12 fixed left-6 w-[400px] py-3 px-7 flex flex-col gap-6 ">
      <div className="configurator__section">
        <div className=" uppercase font-bold text-white">Body color</div>
        <div className="flex flex-row gap-2 items-center flex-wrap py-4">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? 'item--active' : ''
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="w-8 h-8 rounded-full border-[2px] border-solid border-[#999]"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className=" uppercase font-bold text-white">cushion color</div>
        <div className="flex flex-row gap-2 items-center flex-wrap py-4">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? 'item--active' : ''
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="w-8 h-8 rounded-full border-[2px] border-solid border-[#999]"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className=" uppercase font-bold text-white">thread color</div>
        <div className="flex flex-row gap-2 items-center flex-wrap py-4">
          {threadColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === threadColor.color ? 'item--active' : ''
              }`}
              onClick={() => setThreadColor(item)}
            >
              <div
                className="w-8 h-8 rounded-full border-[2px] border-solid border-[#999]"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className=" uppercase font-bold text-white">Label</div>
        <input
          type="text"
          className="px-3 py-2 w-full mt-3 outline-none rounded-md"
          value={textField}
          placeholder="Your name"
          onChange={handleTextChange}
        />
      </div>
      <button
        onClick={exportFile}
        className=" bg-blue-500 py-2 rounded-md text-white font-bold"
      >
        Export
      </button>
    </div>
  );
};

export default Configurator;
