const { createClient } = require('@supabase/supabase-js')
const fs = require("fs")

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const filename = 'app.zip'

const file = fs.readFileSync(filename)
supabase.storage.from(process.env.SUPABASE_STORAGE_BUCKET_NAME).upload(filename, file)
    .then(() => {
        console.log("Done");
    })