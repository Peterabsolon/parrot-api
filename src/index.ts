import dotenv from 'dotenv'

dotenv.config()

console.log('process.env.PGUSER', process.env.PGUSER)

function main(): string {
  return 'Hello Parrot'
}

main()
