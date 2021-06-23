const Avatar = ({ className, src, alt }) => {
  return src ? (
    <img
      className={`h-12 w-12 object-contain border border-white rounded-full`}
      src={src}
      alt={alt?.charAt(0)}
      loading="lazy"
    />
  ) : (
    <div
      className={`bg-[#A1B6EE] h-12 w-12 ${className} rounded-full flex items-center justify-center text-xl`}
    >
      {alt?.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
