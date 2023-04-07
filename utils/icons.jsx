import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';

export function PostsIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H10V10H3V3Z"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 3H21V10H14V3Z"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 14H21V21H14V14Z"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 14H10V21H3V14Z"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function AddPostIcon() {
  return (
    <Svg width="70" height="40" viewBox="0 0 70 40" fill="none">
      <G clipPath="url(#clip0_12_109)">
        <Rect width="70" height="40" rx="20" fill="#FF6C00" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_12_109">
          <Rect width="70" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function ProfileIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ArrowBack() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 12H4"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 18L4 12L10 6"
        stroke="#212121"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SignOut() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 16L21 12L17 8"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 12H9"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function DeleteIcon() {
  return (
    <Svg width="70" height="40" viewBox="0 0 70 40" fill="none">
      <G clipPath="url(#clip0_38_39)">
        <Rect width="70" height="40" rx="20" fill="#F6F6F6" />
        <Path
          d="M26 14H28H44"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M42.5 14C42.5 13.7239 42.2761 13.5 42 13.5C41.7239 13.5 41.5 13.7239 41.5 14H42.5ZM28.5 14C28.5 13.7239 28.2761 13.5 28 13.5C27.7239 13.5 27.5 13.7239 27.5 14H28.5ZM30.5 14C30.5 14.2761 30.7239 14.5 31 14.5C31.2761 14.5 31.5 14.2761 31.5 14H30.5ZM38.5 14C38.5 14.2761 38.7239 14.5 39 14.5C39.2761 14.5 39.5 14.2761 39.5 14H38.5ZM41.5 14V28H42.5V14H41.5ZM41.5 28C41.5 28.8284 40.8284 29.5 40 29.5V30.5C41.3807 30.5 42.5 29.3807 42.5 28H41.5ZM40 29.5H30V30.5H40V29.5ZM30 29.5C29.1716 29.5 28.5 28.8284 28.5 28H27.5C27.5 29.3807 28.6193 30.5 30 30.5V29.5ZM28.5 28V14H27.5V28H28.5ZM31.5 14V12H30.5V14H31.5ZM31.5 12C31.5 11.1716 32.1716 10.5 33 10.5V9.5C31.6193 9.5 30.5 10.6193 30.5 12H31.5ZM33 10.5H37V9.5H33V10.5ZM37 10.5C37.8284 10.5 38.5 11.1716 38.5 12H39.5C39.5 10.6193 38.3807 9.5 37 9.5V10.5ZM38.5 12V14H39.5V12H38.5Z"
          fill="#BDBDBD"
        />
        <Path
          d="M33 19V25"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M37 19V25"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_38_39">
          <Rect width="70" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function CameraIcon() {
  return (
    <Svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <Circle cx="30" cy="30" r="30" fill="#FFFFFF4D" />
      <G clipPath="url(#clip0_32_29)">
        <Path
          d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
          fill="#BDBDBD"
        />
        <Path
          d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
          fill="#BDBDBD"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_32_29">
          <Rect
            width="24"
            height="24"
            fill="red"
            transform="translate(18 18)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export function LocationIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function CommentIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.5C0.996559 10.8199 1.30493 12.1219 1.9 13.3C3.33904 16.1793 6.28109 17.9988 9.5 18C10.8199 18.0034 12.1219 17.6951 13.3 17.1L19 19L17.1 13.3C17.6951 12.1219 18.0034 10.8199 18 9.5C17.9988 6.28109 16.1793 3.33904 13.3 1.9C12.1219 1.30493 10.8199 0.996557 9.5 0.999998H9C4.68419 1.2381 1.2381 4.68419 1 9V9.5V9.5Z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
