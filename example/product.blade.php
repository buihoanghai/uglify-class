<?php
use \iprice\frontend\Tracking\GoogleTagManager\Tracker;
?>
<a class="flex flex-column-l flex-row no-underline product crd-s z-1 white br3 overflow-hidden ml1 mr1 mr2-l ml2-l relative"
   data-ga-trigger="ga-conversion"
   data-vars-action="{{ $dataVarsAction }}"
   target="_blank"
   data-vars-merchant="{{{ $merchant . Tracker::getMerchantSuffix($product) }}}"
   rel="nofollow"
   data-vars-extras="position:{{$position}}"
   href="{{ $mainUrl }}"
>
    @if ($product['_source']['price']['discount'] > 0)
        <span class="new-badge bg-orange white f11 b tc z-4 absolute top-0 left-0">SALE</span>
    @endif
    <div class="w-20 ma2 ml13-l mr13-l mt2-l mb0-l wc26r-l db">
        <amp-img
                 width="1"
                 height="1"
                 layout="responsive"
                 src="{{ Option::getProductCdn() . '/' . $img }}"
                 alt="{{{ $product['_source']['brand']['name'] ." ". $product['_source']['name'] }}}"
        >
        </amp-img>
    </div>
    <span class="h73 mv2 ml13-l mr13-l w-60 wc26r-l">
        <span class="name blue lh-title overflow-hidden h33">
        @if ($product['_source']['brand']['name'])
                <b class="blue">{{{ $product['_source']['brand']['name'] }}}</b>
                {{{ $trimmedShort }}}
            @else
                {{{ $product['_source']['name'] }}}
            @endif
        </span>
        <span class="price db h37">
            @if ($product['_source']['price']['discount'] > 0)
                <span class="accent1 db b f16">{{ $currencyUtil->format($product['_source']['price']['sale']) }}</span>
            @endif
            <span class="{{ request($product['_source']['price']['discount'] > 0 ? 'f11 lh-11 original strike b dib' : 'accent b f16') }}">
                {{ $currencyUtil->format($product['_source']['price']['original']) }}
            </span>
            @if ($product['_source']['price']['discount'] > 0)
                <span class="accent b f11 tc ml2">−{{ $product['_source']['price']['discount'] }}%</span>
            @endif
        </span>
    </span>
    <button class="dn db-l b h3r tc lh-3r white bg-blue">
        {{ trans('iprice.shop_now') }}
    </button>
    <div class="dn-l absolute right-0 w3r h-100 ml1 ph2 bg-blue flex items-center">
        <i class="iprice-listing-icons-sprite i-arrow-right db"></i>
    </div>
</a>
