interface Purchase {
    businessHours: number[],
    currentHour: Date,
    open: number,
    close: number,
    message: string
}


const businessHours: number[] = [9, 17]
 export const purchase = ()  => {
    const currentHour = new Date().getHours
    const [open, close] = businessHours

    if(currentHour > open && currentHour < close) {
      return {message: 'Success'}
    }else return { message: 'Error' }
}