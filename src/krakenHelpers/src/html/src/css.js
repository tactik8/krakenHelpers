


const hex = "#228BE6";
const rgb = parseInt(hex.slice(1), 16);
const r = (rgb >> 16) & 255;
const g = (rgb >> 8) & 255;
const b = rgb & 255;

export function css(palette){



    // Add rgb colors
    for(let k in palette){


        let hex = palette[k]

        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 255;
        const g = (rgb >> 8) & 255;
        const b = rgb & 255;

        

        
        palette[k+ '_rgb'] = `${r}, ${g}, ${b}`
        
    }



    
    return `

    <style>


    :root{

        --xx-white:      ${palette.white};

        --xx-light:      ${palette.light};
        --xx-dark:       ${palette.dark};
        --xx-primary:    ${palette.primary};
        --xx-secondary:  ${palette.secondary};
        --xx-info:       ${palette.info};
        --xx-success:    ${palette.success};
        --xx-warning:    ${palette.warning};
        --xx-danger:     ${palette.danger};


        --bs-white: var(--xx-white);
        --bs-light: var(--xx-light);
        --bs-dark: var(--xx-dark);
        --bs-primary: var(--xx-primary);
        --bs-secondary: var(--xx-secondary);
        --bs-info: var(--xx-info);
        --bs-success: var(--xx-success);
        --bs-warning: var(--xx-warning);
        --bs-danger: var(--xx-danger);

        --bs-white-rgb: ${palette.white_rgb};
        --bs-light-rgb: ${palette.light_rgb};
        --bs-dark-rgb: ${palette.dark_rgb};
        --bs-primary-rgb: ${palette.primary_rgb};
        --bs-secondary-rgb: ${palette.secondary_rgb};
        --bs-info-rgb: ${palette.info_rgb};
        --bs-success-rgb: ${palette.success_rgb};
        --bs-warning-rgb: ${palette.warning_rgb};
        --bs-danger-rgb: ${palette.danger_rgb};


        --bs-primary-color: var(--bs-dark);
        --bs-body-color: var(--bs-dark);
        --bs-link-color: var(--bs-primary);
        --bs-emphasis-color:  hsl(
            from var(--bs-dark)
                calc(h - 0.15)
                calc(s - 0.15)
                calc(l - 0.15)
                / 
                alpha
          );

        
        --bs-secondary-color: var(--bs-secondary);

        --bs-primary-hover-bg: hsl(
            from var(--bs-primary)
                calc(h - (l*0.15))
                calc(s - (s*0.15))
                calc(l - (l*0.15))
                / 
                alpha
          );

        --bs-primary-active-bg: hsl(
            from var(--bs-primary)
                calc(h - (l*0.20))
                calc(s - (s*0.20))
                calc(l - (l*0.20))
                / 
                alpha
          );

        --bs-primary-subtle-bg: hsl(
            from var(--bs-primary)
                calc(h + (l*0.20))
                calc(s + (s*0.20))
                calc(l + (l*0.20))
                / 
                alpha
          );



        --bs-secondary-hover-bg: hsl(
            from var(--bs-secondary)
                calc(h - (l*0.15))
                calc(s - (s*0.15))
                calc(l - (l*0.15))
                / 
                alpha
          );

        --bs-secondary-active-bg: hsl(
            from var(--bs-secondary)
                calc(h - (l*0.20))
                calc(s - (s*0.20))
                calc(l - (l*0.20))
                / 
                alpha
          );

        --bs-secondary-subtle-bg: hsl(
            from var(--bs-secondary)
                calc(h + (l*0.20))
                calc(s + (s*0.20))
                calc(l + (l*0.20))
                / 
                alpha
          );




        

    }




   .filter-src {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);

   }


    button.btn-primary {
        --bs-btn-color: #fff;
        --bs-btn-bg: var(--bs-primary);
        --bs-btn-border-color: var(--bs-primary);
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: var(--bs-primary-hover-bg);
        --bs-btn-hover-border-color: var(--bs-primary-hover-bg);
        --bs-btn-focus-shadow-rgb: 49, 132, 253;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: var(--bs-primary-active);
        --bs-btn-active-border-color: var(--bs-primary-active);
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg: var(--bs-primary);
        --bs-btn-disabled-border-color: var(--bs-primary);
    }


    button.btn-secondary {
        --bs-btn-color: #fff;
        --bs-btn-bg: var(--bs-secondary);
        --bs-btn-border-color:var(--bs-secondary);
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: var(--bs-secondary-hover-bg);
        --bs-btn-hover-border-color:var(--bs-secondary-hover-bg);
        --bs-btn-focus-shadow-rgb: 130, 138, 145;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: var(--bs-secondary-active-bg);
        --bs-btn-active-border-color:var(--bs-secondary-active-bg);
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg:var(--bs-secondary);
        --bs-btn-disabled-border-color:var(--bs-secondary);
    }

    </style>
    `
}


