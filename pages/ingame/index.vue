<script setup>
import { game } from '~~/composables/game'
</script>

<template>
  <div class="flex">
    <div bg-warmgray-500 h-screen w-fit p2>
      <div h="full">
        <LeftBarItemWrap text="blight" align="-left-7.5">
          <Deck deck="blight" />
        </LeftBarItemWrap>
        <LeftBarItemWrap text="event" align="-left-6.5">
          <Deck deck="event" />
        </LeftBarItemWrap>
        <LeftBarItemWrap text="fear" align="-left-5.7">
          <FearDeck />
        </LeftBarItemWrap>
        <LeftBarItemWrap text="ravage" align="-left-7.5">
          <InvaderCard current="j1" />
        </LeftBarItemWrap>
        <LeftBarItemWrap text="build" align="-left-6.5">
          <InvaderCard current="s1" />
        </LeftBarItemWrap>
        <LeftBarItemWrap text="explore" align="-left-8">
          <InvaderCard current="b1" />
        </LeftBarItemWrap>
      </div>
    </div>
    <div />
    <div bg-warmgray-500 h-screen w-40 ml-auto p2>
      <div bg="neutral-400/20" relative rounded p="y2">
        <div
          style="-webkit-transform-origin: 50%  51%;" text="xs"
          class="-rotate-90 translate-z-0 absolute top-1/2 -translate-y-1/2 uppercase -left-2"
        >
          Turn {{ game.currentTurn }}
        </div>
        <div space-y-1 m="l2">
          <div text="xs center" font="bold">
            {{ game.currentPhase }}
          </div>
          <div text="center">
            <div uppercase inline-block cursor-pointer text="sm" p="y1 x2" b="solid 1 stone600" rounded>
              nextaaaa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
