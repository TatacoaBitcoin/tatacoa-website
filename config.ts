const siteMetadata = {
    title: `Tatacoa Bitcoin`,
    siteUrl: `http://www.tatacoabitcoin.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/tatacoa.png`,
    icon: `/images/tatacoa.png`,
    titleImage: `/images/wall4.jpg`,
    ogImage: `/images/wall4.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Productos | Servicios`,
    description: `Procesamiento de pagos usando la red Lightning`,
    about:
        "Somos una organizacion dedicada a la promoción de productos y servicios relacionados a las criptomonedas. Creemos firmemente que las criptomonedas tienen el potencial de convertirse en motor de desarrollo económico y empoderar a las personas en el manejo de sus recursos económicos",
    author: `Tatacoa Team`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "INICIO",
            url: "/",
        },
        {
            name: "NOSOTROS",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "SERVICIOS",
            url: "/portfolio",
        },
        {
            name: "TIENDA",
            url: "https://shop.tatacoabitcoin.com/",
        },
        {
            name: "CONTACTO",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "POLITICA DE DATOS",
            url: "/privacy-policy",
        },
        // {
        //     name: "GitHub",
        //     url: "https://github.com/akzhy/gatsby-starter-elemental",
        // },
    ],
    social: [
        // {
        //     name: "Facebook",
        //     icon: "/images/Facebook.svg",
        //     url: "#",
        // },
        // {
        //     name: "Twitter",
        //     icon: "/images/Twitter.svg",
        //     url: "#",
        // },
        {
            name: "WhatsApp",
            icon: "/images/whatsapp.svg",
            url: "https://wa.me/573006747172?text=Hola%2C%20estoy%20interesado%20en%20saber%20m%C3%A1s%20acerca%20de%20sus%20servicios",
        },
        {
            name: "Instagram",
            icon: "/images/instagram.svg",
            url: "#",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "",
        description: `Si tienes inquietudes, no dudes en contactarnos`,
        mail: "info@tatacoabitcoin.com",
        phone: "000-000-0000",
        address: "",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: true,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: true
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
