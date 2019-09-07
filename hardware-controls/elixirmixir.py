import time
import sys
import RPi.GPIO as GPIO

SECONDS_PER_ML = 0.1250
relayPins = [32, 33, 36, 35, 38, 40]
drinkSize = 100
essenceNames = ["Almond", "Birch", "Cheddar", "Dandelion", "Earwig", "Fluorine"]

GPIO.setmode(GPIO.BOARD)
GPIO.cleanup()
GPIO.setup(relayPins, GPIO.OUT, initial=GPIO.LOW)

print("Relay Pins:", relayPins)
print("essenceNames:", essenceNames)


def mixElixir(essenceRecipe):
    """
        Mixes a drink according to the ratio of component essences in the input essenceRecipe
        An essenceRecipe should be a list of integers corresponding to the number of component essences
        The essenceRecipe should have N elements, where N is the number of component essences available, i.e., the number of pumps/relays
    """
    print("Recipe:", essenceRecipe)

    essenceRecipe = [int(i) for i in essenceRecipe]

    print("Cleaned Recipe:", essenceRecipe)

    # normalize the recipe for consistent drink size
    remainingRecipe = normalizeRecipe(essenceRecipe, drinkSize)

    while sum(i > 0 for i in remainingRecipe):

        mixTick(remainingRecipe)
        remainingRecipe = [max(0, x-1) for x in remainingRecipe]

    # Turn all pumps off
    GPIO.output(relayPins, GPIO.LOW)
    GPIO.cleanup() # CONFIRM BEHAVIOR HERE - WILL THIS PUT RELAYS IN A WEIRD STATE?

    print("Elixir mixed.")


def mixTick(remainingRecipe):
    """
        manages the pumps for one "tick," a unit of time that dispenses a fixed volume of liquid from each pump that is on during that tick      
    """

    print("MixTick:", remainingRecipe)

    for i in range(len(remainingRecipe)):

        if remainingRecipe[i] > 0:
            GPIO.output(relayPins[i], GPIO.HIGH)
            #print(essenceNames[i], "is on.")

        else:
            GPIO.output(relayPins[i], GPIO.LOW)
            #print(essenceNames[i], "is off.")

    time.sleep(SECONDS_PER_ML)


def normalizeRecipe(recipe, total):
    """
        Normalizes the recipe to "total" so the pump timing is consisten to "total" tick-units
    """
    return [int((essence*total)/sum(recipe)) for essence in recipe]

mixElixir([sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6]])
