import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const GradientNearAccountId = () => {
    return (
        <Svg width="210" height="23" viewBox="0 0 210 23" fill="none">
            <Path
                d="M3.58155 22.28L5.88055 16.021L5.91355 17.869L0.732547 5.12H3.13055L7.00255 14.965H6.29855L9.99455 5.12H12.3265L5.77055 22.28H3.58155ZM18.7791 17.33C17.5911 17.33 16.5607 17.0623 15.6881 16.527C14.8154 15.9917 14.1407 15.2547 13.6641 14.316C13.1947 13.37 12.9601 12.281 12.9601 11.049C12.9601 9.80967 13.2021 8.72067 13.6861 7.782C14.1701 6.836 14.8484 6.10267 15.7211 5.582C16.5937 5.054 17.6131 4.79 18.7791 4.79C19.9671 4.79 20.9974 5.05767 21.8701 5.593C22.7427 6.12833 23.4174 6.86533 23.8941 7.804C24.3707 8.74267 24.6091 9.82433 24.6091 11.049C24.6091 12.2883 24.3671 13.381 23.8831 14.327C23.4064 15.2657 22.7317 16.0027 21.8591 16.538C20.9864 17.066 19.9597 17.33 18.7791 17.33ZM18.7791 15.163C19.9157 15.163 20.7627 14.7817 21.3201 14.019C21.8847 13.249 22.1671 12.259 22.1671 11.049C22.1671 9.80967 21.8811 8.81967 21.3091 8.079C20.7444 7.331 19.9011 6.957 18.7791 6.957C18.0091 6.957 17.3747 7.133 16.8761 7.485C16.3774 7.82967 16.0071 8.31 15.7651 8.926C15.5231 9.53467 15.4021 10.2423 15.4021 11.049C15.4021 12.2957 15.6881 13.293 16.2601 14.041C16.8321 14.789 17.6717 15.163 18.7791 15.163ZM31.5033 17.319C30.682 17.319 29.9927 17.187 29.4353 16.923C28.878 16.659 28.4233 16.3143 28.0713 15.889C27.7267 15.4563 27.4627 14.987 27.2793 14.481C27.096 13.975 26.9713 13.48 26.9053 12.996C26.8393 12.512 26.8063 12.0867 26.8063 11.72V5.12H29.1383V10.961C29.1383 11.423 29.175 11.8997 29.2483 12.391C29.329 12.875 29.4757 13.326 29.6883 13.744C29.9083 14.162 30.2127 14.4993 30.6013 14.756C30.9973 15.0127 31.5107 15.141 32.1413 15.141C32.552 15.141 32.9407 15.075 33.3073 14.943C33.674 14.8037 33.993 14.5837 34.2643 14.283C34.543 13.9823 34.7593 13.5863 34.9133 13.095C35.0747 12.6037 35.1553 12.006 35.1553 11.302L36.5853 11.841C36.5853 12.919 36.3837 13.8723 35.9803 14.701C35.577 15.5223 34.9977 16.164 34.2423 16.626C33.487 17.088 32.574 17.319 31.5033 17.319ZM35.4303 17V13.568H35.1553V5.12H37.4763V17H35.4303ZM40.5615 17V5.12H42.6075V8.002L42.3215 7.628C42.4682 7.24667 42.6588 6.89833 42.8935 6.583C43.1282 6.26033 43.3995 5.99633 43.7075 5.791C44.0082 5.571 44.3418 5.40233 44.7085 5.285C45.0825 5.16033 45.4638 5.087 45.8525 5.065C46.2412 5.03567 46.6152 5.054 46.9745 5.12V7.276C46.5858 7.17333 46.1532 7.144 45.6765 7.188C45.2072 7.232 44.7745 7.38233 44.3785 7.639C44.0045 7.881 43.7075 8.17433 43.4875 8.519C43.2748 8.86367 43.1208 9.24867 43.0255 9.674C42.9302 10.092 42.8825 10.5357 42.8825 11.005V17H40.5615ZM52.2813 17L47.9693 5.12H50.2903L53.4473 14.118L56.6043 5.12H58.9253L54.6133 17H52.2813ZM65.7465 17.33C64.5658 17.33 63.5282 17.0733 62.6335 16.56C61.7462 16.0393 61.0532 15.317 60.5545 14.393C60.0632 13.4617 59.8175 12.3837 59.8175 11.159C59.8175 9.861 60.0595 8.73533 60.5435 7.782C61.0348 6.82867 61.7168 6.09167 62.5895 5.571C63.4622 5.05033 64.4778 4.79 65.6365 4.79C66.8465 4.79 67.8768 5.07233 68.7275 5.637C69.5782 6.19433 70.2125 6.99 70.6305 8.024C71.0558 9.058 71.2245 10.2863 71.1365 11.709H68.8375V10.873C68.8228 9.49433 68.5588 8.475 68.0455 7.815C67.5395 7.155 66.7658 6.825 65.7245 6.825C64.5732 6.825 63.7078 7.188 63.1285 7.914C62.5492 8.64 62.2595 9.68867 62.2595 11.06C62.2595 12.3653 62.5492 13.3773 63.1285 14.096C63.7078 14.8073 64.5438 15.163 65.6365 15.163C66.3552 15.163 66.9748 15.0017 67.4955 14.679C68.0235 14.349 68.4342 13.8797 68.7275 13.271L70.9825 13.986C70.5205 15.0493 69.8202 15.8743 68.8815 16.461C67.9428 17.0403 66.8978 17.33 65.7465 17.33ZM61.5115 11.709V9.916H69.9925V11.709H61.5115ZM73.6045 17V5.12H75.6505V8.002L75.3645 7.628C75.5111 7.24667 75.7018 6.89833 75.9365 6.583C76.1711 6.26033 76.4425 5.99633 76.7505 5.791C77.0511 5.571 77.3848 5.40233 77.7515 5.285C78.1255 5.16033 78.5068 5.087 78.8955 5.065C79.2841 5.03567 79.6581 5.054 80.0175 5.12V7.276C79.6288 7.17333 79.1961 7.144 78.7195 7.188C78.2501 7.232 77.8175 7.38233 77.4215 7.639C77.0475 7.881 76.7505 8.17433 76.5305 8.519C76.3178 8.86367 76.1638 9.24867 76.0685 9.674C75.9731 10.092 75.9255 10.5357 75.9255 11.005V17H73.6045ZM83.4175 22.28L85.7165 16.021L85.7495 17.869L80.5685 5.12H82.9665L86.8385 14.965H86.1345L89.8305 5.12H92.1625L85.6065 22.28H83.4175ZM98.538 17.33C97.3207 17.33 96.2867 17.0587 95.436 16.516C94.5853 15.9733 93.9327 15.229 93.478 14.283C93.0307 13.337 92.8033 12.2627 92.796 11.06C92.8033 9.83533 93.038 8.75367 93.5 7.815C93.962 6.869 94.622 6.12833 95.48 5.593C96.338 5.05767 97.3683 4.79 98.571 4.79C99.869 4.79 100.976 5.11267 101.893 5.758C102.817 6.40333 103.426 7.287 103.719 8.409L101.431 9.069C101.204 8.40167 100.83 7.88467 100.309 7.518C99.7957 7.144 99.2053 6.957 98.538 6.957C97.7827 6.957 97.163 7.13667 96.679 7.496C96.195 7.848 95.8357 8.332 95.601 8.948C95.3663 9.564 95.2453 10.268 95.238 11.06C95.2453 12.2847 95.524 13.2747 96.074 14.03C96.6313 14.7853 97.4527 15.163 98.538 15.163C99.2787 15.163 99.8763 14.9943 100.331 14.657C100.793 14.3123 101.145 13.821 101.387 13.183L103.719 13.733C103.33 14.8917 102.689 15.7827 101.794 16.406C100.899 17.022 99.814 17.33 98.538 17.33ZM110.797 17.33C109.609 17.33 108.578 17.0623 107.706 16.527C106.833 15.9917 106.158 15.2547 105.682 14.316C105.212 13.37 104.978 12.281 104.978 11.049C104.978 9.80967 105.22 8.72067 105.704 7.782C106.188 6.836 106.866 6.10267 107.739 5.582C108.611 5.054 109.631 4.79 110.797 4.79C111.985 4.79 113.015 5.05767 113.888 5.593C114.76 6.12833 115.435 6.86533 115.912 7.804C116.388 8.74267 116.627 9.82433 116.627 11.049C116.627 12.2883 116.385 13.381 115.901 14.327C115.424 15.2657 114.749 16.0027 113.877 16.538C113.004 17.066 111.977 17.33 110.797 17.33ZM110.797 15.163C111.933 15.163 112.78 14.7817 113.338 14.019C113.902 13.249 114.185 12.259 114.185 11.049C114.185 9.80967 113.899 8.81967 113.327 8.079C112.762 7.331 111.919 6.957 110.797 6.957C110.027 6.957 109.392 7.133 108.894 7.485C108.395 7.82967 108.025 8.31 107.783 8.926C107.541 9.53467 107.42 10.2423 107.42 11.049C107.42 12.2957 107.706 13.293 108.278 14.041C108.85 14.789 109.689 15.163 110.797 15.163ZM124.203 17.33C123.015 17.33 121.985 17.0623 121.112 16.527C120.239 15.9917 119.565 15.2547 119.088 14.316C118.619 13.37 118.384 12.281 118.384 11.049C118.384 9.80967 118.626 8.72067 119.11 7.782C119.594 6.836 120.272 6.10267 121.145 5.582C122.018 5.054 123.037 4.79 124.203 4.79C125.391 4.79 126.421 5.05767 127.294 5.593C128.167 6.12833 128.841 6.86533 129.318 7.804C129.795 8.74267 130.033 9.82433 130.033 11.049C130.033 12.2883 129.791 13.381 129.307 14.327C128.83 15.2657 128.156 16.0027 127.283 16.538C126.41 17.066 125.384 17.33 124.203 17.33ZM124.203 15.163C125.34 15.163 126.187 14.7817 126.744 14.019C127.309 13.249 127.591 12.259 127.591 11.049C127.591 9.80967 127.305 8.81967 126.733 8.079C126.168 7.331 125.325 6.957 124.203 6.957C123.433 6.957 122.799 7.133 122.3 7.485C121.801 7.82967 121.431 8.31 121.189 8.926C120.947 9.53467 120.826 10.2423 120.826 11.049C120.826 12.2957 121.112 13.293 121.684 14.041C122.256 14.789 123.096 15.163 124.203 15.163ZM132.67 17V0.83H134.969V17H132.67ZM138.492 3.173V0.94H140.791V3.173H138.492ZM138.492 17V5.12H140.791V17H138.492ZM148.814 17.33C147.706 17.33 146.749 17.055 145.943 16.505C145.143 15.955 144.524 15.207 144.084 14.261C143.651 13.3077 143.435 12.237 143.435 11.049C143.435 9.85367 143.655 8.78667 144.095 7.848C144.535 6.902 145.158 6.15767 145.965 5.615C146.779 5.065 147.743 4.79 148.858 4.79C149.98 4.79 150.922 5.065 151.685 5.615C152.455 6.15767 153.034 6.902 153.423 7.848C153.819 8.794 154.017 9.861 154.017 11.049C154.017 12.237 153.819 13.304 153.423 14.25C153.027 15.196 152.444 15.9477 151.674 16.505C150.904 17.055 149.95 17.33 148.814 17.33ZM149.133 15.251C149.888 15.251 150.504 15.0713 150.981 14.712C151.457 14.3527 151.806 13.8577 152.026 13.227C152.246 12.5963 152.356 11.8703 152.356 11.049C152.356 10.2277 152.242 9.50167 152.015 8.871C151.795 8.24033 151.45 7.749 150.981 7.397C150.519 7.045 149.928 6.869 149.21 6.869C148.447 6.869 147.82 7.056 147.329 7.43C146.837 7.804 146.471 8.30633 146.229 8.937C145.994 9.56767 145.877 10.2717 145.877 11.049C145.877 11.8337 145.994 12.545 146.229 13.183C146.471 13.8137 146.83 14.316 147.307 14.69C147.791 15.064 148.399 15.251 149.133 15.251ZM152.356 17V8.453H152.092V1.16H154.402V17H152.356ZM157.875 17V14.569H160.306V17H157.875ZM172.112 17V11.159C172.112 10.697 172.072 10.224 171.991 9.74C171.918 9.24867 171.771 8.794 171.551 8.376C171.339 7.958 171.034 7.62067 170.638 7.364C170.25 7.10733 169.74 6.979 169.109 6.979C168.699 6.979 168.31 7.04867 167.943 7.188C167.577 7.32 167.254 7.53633 166.975 7.837C166.704 8.13767 166.488 8.53367 166.326 9.025C166.172 9.51633 166.095 10.114 166.095 10.818L164.665 10.279C164.665 9.201 164.867 8.25133 165.27 7.43C165.674 6.60133 166.253 5.956 167.008 5.494C167.764 5.032 168.677 4.801 169.747 4.801C170.569 4.801 171.258 4.933 171.815 5.197C172.373 5.461 172.824 5.80933 173.168 6.242C173.52 6.66733 173.788 7.133 173.971 7.639C174.155 8.145 174.279 8.64 174.345 9.124C174.411 9.608 174.444 10.0333 174.444 10.4V17H172.112ZM163.763 17V5.12H165.82V8.552H166.095V17H163.763ZM182.428 17.33C181.247 17.33 180.21 17.0733 179.315 16.56C178.428 16.0393 177.735 15.317 177.236 14.393C176.745 13.4617 176.499 12.3837 176.499 11.159C176.499 9.861 176.741 8.73533 177.225 7.782C177.716 6.82867 178.398 6.09167 179.271 5.571C180.144 5.05033 181.159 4.79 182.318 4.79C183.528 4.79 184.558 5.07233 185.409 5.637C186.26 6.19433 186.894 6.99 187.312 8.024C187.737 9.058 187.906 10.2863 187.818 11.709H185.519V10.873C185.504 9.49433 185.24 8.475 184.727 7.815C184.221 7.155 183.447 6.825 182.406 6.825C181.255 6.825 180.389 7.188 179.81 7.914C179.231 8.64 178.941 9.68867 178.941 11.06C178.941 12.3653 179.231 13.3773 179.81 14.096C180.389 14.8073 181.225 15.163 182.318 15.163C183.037 15.163 183.656 15.0017 184.177 14.679C184.705 14.349 185.116 13.8797 185.409 13.271L187.664 13.986C187.202 15.0493 186.502 15.8743 185.563 16.461C184.624 17.0403 183.579 17.33 182.428 17.33ZM178.193 11.709V9.916H186.674V11.709H178.193ZM193.426 17.33C192.546 17.33 191.809 17.1687 191.215 16.846C190.621 16.516 190.17 16.0833 189.862 15.548C189.562 15.0053 189.411 14.4113 189.411 13.766C189.411 13.1647 189.518 12.6367 189.73 12.182C189.943 11.7273 190.258 11.3423 190.676 11.027C191.094 10.7043 191.608 10.444 192.216 10.246C192.744 10.092 193.342 9.95633 194.009 9.839C194.677 9.72167 195.377 9.61167 196.11 9.509C196.851 9.40633 197.584 9.30367 198.31 9.201L197.474 9.663C197.489 8.73167 197.291 8.04233 196.88 7.595C196.477 7.14033 195.78 6.913 194.79 6.913C194.167 6.913 193.595 7.05967 193.074 7.353C192.554 7.639 192.191 8.11567 191.985 8.783L189.84 8.123C190.134 7.10367 190.691 6.29333 191.512 5.692C192.341 5.09067 193.441 4.79 194.812 4.79C195.876 4.79 196.8 4.97333 197.584 5.34C198.376 5.69933 198.956 6.27133 199.322 7.056C199.513 7.44467 199.63 7.85533 199.674 8.288C199.718 8.72067 199.74 9.18633 199.74 9.685V17H197.705V14.283L198.101 14.635C197.61 15.5443 196.983 16.2227 196.22 16.67C195.465 17.11 194.534 17.33 193.426 17.33ZM193.833 15.449C194.486 15.449 195.047 15.3353 195.516 15.108C195.986 14.8733 196.363 14.5763 196.649 14.217C196.935 13.8577 197.122 13.4837 197.21 13.095C197.335 12.743 197.405 12.347 197.419 11.907C197.441 11.467 197.452 11.115 197.452 10.851L198.2 11.126C197.474 11.236 196.814 11.335 196.22 11.423C195.626 11.511 195.087 11.599 194.603 11.687C194.127 11.7677 193.701 11.8667 193.327 11.984C193.012 12.094 192.73 12.226 192.48 12.38C192.238 12.534 192.044 12.721 191.897 12.941C191.758 13.161 191.688 13.4287 191.688 13.744C191.688 14.052 191.765 14.338 191.919 14.602C192.073 14.8587 192.308 15.064 192.623 15.218C192.939 15.372 193.342 15.449 193.833 15.449ZM202.597 17V5.12H204.643V8.002L204.357 7.628C204.503 7.24667 204.694 6.89833 204.929 6.583C205.163 6.26033 205.435 5.99633 205.743 5.791C206.043 5.571 206.377 5.40233 206.744 5.285C207.118 5.16033 207.499 5.087 207.888 5.065C208.276 5.03567 208.65 5.054 209.01 5.12V7.276C208.621 7.17333 208.188 7.144 207.712 7.188C207.242 7.232 206.81 7.38233 206.414 7.639C206.04 7.881 205.743 8.17433 205.523 8.519C205.31 8.86367 205.156 9.24867 205.061 9.674C204.965 10.092 204.918 10.5357 204.918 11.005V17H202.597Z"
                fill="url(#paint0_linear_708_7308)"
            />
            <Defs>
                <LinearGradient id="paint0_linear_708_7308" x1="0" y1="9.0001" x2="210" y2="9.00011" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#5F8AFA" />
                    <Stop offset="1" stopColor="#4FD1D9" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default GradientNearAccountId;
