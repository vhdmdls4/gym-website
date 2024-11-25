import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button, Grid, Spinner } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn } from '@/utils/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

enum Plan {
  PLUS = 'plus',
  PREMIUM = 'premium'
}

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters long.' })
    .max(50, { message: 'First name must be less than 50 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters long.' })
    .max(50, { message: 'Last name must be less than 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .max(15, { message: 'Phone number must not exceed 15 digits.' }),
  plan: z.enum([Plan.PLUS, Plan.PREMIUM]),
  birthdate: z.date({
    message: 'Please enter a valid date in the format YYYY-MM-DD.'
  })
})

export function ProfileForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      plan: Plan.PLUS,
      birthdate: undefined
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Confirmation email sent successfully',
      description: 'Check your inbox to confirm your subscription and details.',
      variant: null
    })
  }

  const delayedPromise = (): Promise<string> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise após 1500ms')
      }, 2000)
    })

  const handleClick = async (e: Event) => {
    e.preventDefault()
    setLoading(true)
    try {
      await delayedPromise()
      form.handleSubmit(onSubmit)()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid columns={{ xs: '1', sm: '2' }} gap="5" width="auto">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your First Name" {...field} />
                </FormControl>
                <FormDescription className="ps-2">First Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Last Name" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Last Name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Email" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="What's your Phone" {...field} />
                </FormControl>
                <FormDescription className="ps-2">Phone</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        color="gray"
                        className={cn(
                          'text-left font-normal rounded-md h-9 w-full',
                          !field.value && 'text-muted-foreground'
                        )}
                        size="3"
                        type="button"
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription className="ps-2">
                  Date of birth.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup
            defaultValue={Plan.PREMIUM}
            orientation="horizontal"
            className="flex space-x-8 items-center pb-7"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={Plan.PREMIUM}
                id="radio--plan-premium__form-join"
              />
              <Label htmlFor="radio--plan-premium__form-join">
                {Plan.PREMIUM.toUpperCase()}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={Plan.PLUS}
                id="radio--plan-plus__form-join"
              />
              <Label htmlFor="radio--plan-plus__form-join">
                {Plan.PLUS.toUpperCase()}
              </Label>
            </div>
          </RadioGroup>

          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a plan here" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={Plan.PLUS}>
                      {Plan.PLUS.toUpperCase()}
                    </SelectItem>
                    <SelectItem value={Plan.PREMIUM}>{Plan.PREMIUM}</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{' '}
                  <Link to="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button
            size={'4'}
            variant="solid"
            highContrast
            color="gray"
            className="col-span-full"
            type="submit"
            onClick={handleClick}
          >
            Submit
            {loading && <Spinner />}
          </Button>
        </Grid>
      </form>
    </Form>
  )
}
