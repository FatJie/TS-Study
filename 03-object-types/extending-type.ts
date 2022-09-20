interface BasicAddr {
  name: string
  street?: string
  city?: string
}

interface AddrWithUnit extends BasicAddr {
  unit: string
}

const addrWithUnit: AddrWithUnit = {
  unit: '一单元',
  name: 'fatjie'
}


interface Colors {
  color: string
}
interface Circles {
  radius: number
}
interface ColorCircle extends Colors, Circles {}

const colorCircle: ColorCircle = {
  color: '#ccc',
  radius: 100
}