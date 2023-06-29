/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        "styledComponents": {
            transform: "styled-components",
        },
    }
}

module.exports = nextConfig
