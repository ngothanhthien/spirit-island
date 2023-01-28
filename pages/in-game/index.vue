<script setup>
import { game } from '~~/composables/game'
import { PHASE } from '~~/enum'
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
    <div bg-warmgray-500 h-screen w-50 ml-auto p2 space-y-2>
      <RightBarItemWrap :text="`Turn ${game.currentTurn}`" align="-left-2">
        <div text="xs center" font="bold">
          {{ PHASE[game.currentPhase] }}
        </div>
        <div text="center">
          <div uppercase inline-block cursor-pointer text="sm" p="y1 x2" b="solid 1 stone600" rounded>
            next
          </div>
        </div>
      </RightBarItemWrap>
      <RightBarItemWrap text="adversary" align="-left-4.2">
        <AdversaryRightBar />
      </RightBarItemWrap>
      <RightBarItemWrap text="terror" align="-left-2">
        <TerrorRightBar />
      </RightBarItemWrap>
      <RightBarItemWrap text="stage" align="-left-2">
        <StageRightBar />
      </RightBarItemWrap>
    </div>
  </div>
</template>
