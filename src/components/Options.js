const Options = ({ className, Icon, name }) => {
  return (
    <div className={`flex items-center ${className} text-white`}>
      <Icon className="h-7" />
      <h1 className="ml-4">{name}</h1>
    </div>
  );
};

export default Options;
