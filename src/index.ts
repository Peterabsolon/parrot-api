import dotenv from 'dotenv'

dotenv.config({ debug: true })

export function main(): string {
  return 'Hello Parrot'
}

console.log(main())
