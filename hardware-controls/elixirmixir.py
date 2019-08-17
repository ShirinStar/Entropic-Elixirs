import time
import sys
import RPi.GPIO as GPIO

SECONDS_PER_ML = 0.1250
relayPins = [21, 22, 23, 24, 25, 26]
essenceNames = ["Almond", "Birch", "Cheddar", "Dandelion", "Earwig", "Fluorine"]

GPIO.setmode(GPIO.BCM)
GPIO.setup(relayPins, GPIO.OUT, initial=GPIO.LOW)

print("Pins:", relayPins)
print("essenceNames:", essenceNames)


def mixElixir(essenceRecipe):

  print("Recipe:", essenceRecipe)

  remainingRecipe = normalizeRecipe(essenceRecipe, 100)

  while sum(i > 0 for i in remainingRecipe):

    mixTick(remainingRecipe)
    remainingRecipe = [max(0, x-1) for x in remainingRecipe]

  # Turn all pumps off
  GPIO.output(relayPins, GPIO.LOW)
  GPIO.cleanup() # CONFIRM BEHAVIOR HERE - WILL THIS PUT RELAYS IN A WEIRD STATE?

  print "Elixir mixed."


def mixTick(remainingRecipe):

  #print("MixTick:", remainingRecipe)

  for i in range(len(remainingRecipe)):

    if remainingRecipe[i] > 0:
      GPIO.output(relayPins[i], GPIO.HIGH)
      #print(essenceNames[i], "is on.")
      time.sleep(0.0001) # PLACEHOLDER

    else:
      GPIO.output(relayPins[i], GPIO.LOW)
      #print(essenceNames[i], "is off.")
      time.sleep(0.0001) # PLACEHOLDER

  time.sleep(SECONDS_PER_ML)


def normalizeRecipe(recipe, total):  
  return [((essence*total)/sum(recipe)) for essence in recipe]


mixElixir([sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6]])
