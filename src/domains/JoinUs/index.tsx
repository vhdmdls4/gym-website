import { Box, Flex, Grid, Heading } from '@radix-ui/themes'
import stylesHome from '../Home/Home.module.css'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { ProfileForm } from './components/FormSchema'

export function JoinUs() {
  return (
    <Grid columns={{ sm: '1', md: '2' }} gap="8" width="auto">
      <Box>
        <Heading as="h1" size={'9'} weight={'medium'}>
          Join Us Today!
        </Heading>
        <div className="my-3">
          <p className="text-lg leading-relaxed mb-2">
            <strong>Your fitness journey starts here!</strong> At Strong
            Fitness, we’re more than just a gym – we’re your partners in
            achieving greatness. Whether you’re just starting out or leveling up
            your routine, our state-of-the-art facilities, expert trainers, and
            flexible plans are designed to fit your lifestyle.
          </p>
          <br />
          <p className="text-lg leading-relaxed mb-2">
            <span className="font-bold">💪 Why wait?</span> Take the first step
            toward the healthiest, strongest version of yourself.
          </p>
          <ul className="list-disc pl-5 text-lg mb-2">
            <li>
              <strong>Plus Plan:</strong> For those seeking a balanced fitness
              approach.
            </li>
            <li>
              <strong>Premium Plan:</strong> Exclusive perks for the ultimate
              fitness experience.
            </li>
          </ul>
        </div>
      </Box>
      <Box className="my-auto">
        <ProfileForm />
        <div className="space-y-1"></div>
      </Box>
    </Grid>
  )
}
