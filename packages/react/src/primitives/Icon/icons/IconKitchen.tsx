import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconKitchen = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5H10V8H8V5ZM8 12H10V17H8V12ZM18 2.01L6 2C4.9 2 4 2.89 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.89 19.1 2.01 18 2.01ZM18 20H6V10.98H18V20ZM18 9H6V4H18V9Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
