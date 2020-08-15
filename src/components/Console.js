export default Console = prop => (
    console[Object.keys(prop)[0]](...Object.values(prop))
    ,null
)