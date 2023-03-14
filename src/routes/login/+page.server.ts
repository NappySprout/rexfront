/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const name = data.get('name');
    const password = data.get('password');
    console.log(name)
    console.log(password)
    
  }
};