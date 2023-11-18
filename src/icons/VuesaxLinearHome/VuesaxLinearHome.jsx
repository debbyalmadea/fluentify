export const VuesaxLinearHome = ({ className, color, strokeColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    className={className}
  >
    <path
      d="M9.895 2.84016L4.505 7.04016C3.605 7.74016 2.875 9.23016 2.875 10.3602V17.7702C2.875 20.0902 4.765 21.9902 7.085 21.9902H18.665C20.985 21.9902 22.875 20.0902 22.875 17.7802V10.5002C22.875 9.29016 22.065 7.74016 21.075 7.05016L14.895 2.72016C13.495 1.74016 11.245 1.79016 9.895 2.84016Z"
      fill={color}
      stroke={strokeColor}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.875 17.9902V14.9902"
      stroke={strokeColor}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
